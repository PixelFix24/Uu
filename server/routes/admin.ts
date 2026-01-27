import { RequestHandler } from "express";
import * as fs from "fs";
import * as path from "path";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
const DATA_DIR = path.join(process.cwd(), "data");

// Stelle sicher, dass das data Verzeichnis existiert
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

interface RepairRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  device: string;
  service: string;
  message: string;
  status: "offen" | "bearbeitet" | "fertig";
  createdAt: string;
}

interface CMSContent {
  id: string;
  section: string;
  key: string;
  value: string;
  type: "text" | "textarea";
}

// Helper Funktionen
const getRepairRequests = (): RepairRequest[] => {
  const filePath = path.join(DATA_DIR, "repair-requests.json");
  if (!fs.existsSync(filePath)) {
    return [];
  }
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return [];
  }
};

const saveRepairRequests = (requests: RepairRequest[]) => {
  const filePath = path.join(DATA_DIR, "repair-requests.json");
  fs.writeFileSync(filePath, JSON.stringify(requests, null, 2));
};

const getCMSContent = (): CMSContent[] => {
  const filePath = path.join(DATA_DIR, "cms-content.json");
  if (!fs.existsSync(filePath)) {
    return getDefaultCMSContent();
  }
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return getDefaultCMSContent();
  }
};

const saveCMSContent = (content: CMSContent[]) => {
  const filePath = path.join(DATA_DIR, "cms-content.json");
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
};

const getDefaultCMSContent = (): CMSContent[] => {
  return [
    {
      id: "hero-title",
      section: "hero",
      key: "Überschrift",
      value: "Willkommen bei PixelFix24",
      type: "text",
    },
    {
      id: "hero-desc",
      section: "hero",
      key: "Beschreibung",
      value: "Ihr zuverlässiger Partner für Handy- und Tablet-Reparaturen aller Marken. Schnell, transparent und professionell.",
      type: "textarea",
    },
    {
      id: "about-title",
      section: "about",
      key: "Überschrift",
      value: "Über uns",
      type: "text",
    },
    {
      id: "about-desc",
      section: "about",
      key: "Beschreibung",
      value: "Wir sind ein junges Unternehmen mit langjähriger Erfahrung in der Smartphone- und Tablet-Reparatur.",
      type: "textarea",
    },
    {
      id: "contact-title",
      section: "contact",
      key: "Überschrift",
      value: "Kontakt & Standort",
      type: "text",
    },
  ];
};

// Admin Login Handler
export const handleAdminLogin: RequestHandler = (req, res) => {
  const { password } = req.body;

  if (password === ADMIN_PASSWORD) {
    res.cookie("admin_session", "authenticated", {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 Stunden
    });
    res.json({ success: true });
  } else {
    res.status(401).json({ error: "Invalid password" });
  }
};

// Admin Logout Handler
export const handleAdminLogout: RequestHandler = (req, res) => {
  res.clearCookie("admin_session");
  res.json({ success: true });
};

// Check Admin Authentication
export const handleAdminCheck: RequestHandler = (req, res) => {
  const session = req.cookies.admin_session;
  if (session === "authenticated") {
    res.json({ authenticated: true });
  } else {
    res.status(401).json({ authenticated: false });
  }
};

// Reparaturanfragen abrufen
export const handleGetRepairRequests: RequestHandler = (req, res) => {
  const session = req.cookies.admin_session;
  if (session !== "authenticated") {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const requests = getRepairRequests();
  res.json(requests);
};

// Reparaturanfrage speichern
export const handleSaveRepairRequest: RequestHandler = (req, res) => {
  const { name, email, phone, device, service, message } = req.body;

  const requests = getRepairRequests();
  const newRequest: RepairRequest = {
    id: Date.now().toString(),
    name,
    email,
    phone,
    device,
    service,
    message,
    status: "offen",
    createdAt: new Date().toISOString(),
  };

  requests.push(newRequest);
  saveRepairRequests(requests);

  res.json({ success: true, request: newRequest });
};

// Reparaturanfrage Status aktualisieren
export const handleUpdateRepairRequest: RequestHandler = (req, res) => {
  const session = req.cookies.admin_session;
  if (session !== "authenticated") {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const { id } = req.params;
  const { status } = req.body;

  const requests = getRepairRequests();
  const index = requests.findIndex((r) => r.id === id);

  if (index === -1) {
    res.status(404).json({ error: "Request not found" });
    return;
  }

  requests[index].status = status;
  saveRepairRequests(requests);

  res.json({ success: true, request: requests[index] });
};

// Reparaturanfrage löschen
export const handleDeleteRepairRequest: RequestHandler = (req, res) => {
  const session = req.cookies.admin_session;
  if (session !== "authenticated") {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const { id } = req.params;

  const requests = getRepairRequests();
  const filtered = requests.filter((r) => r.id !== id);

  if (filtered.length === requests.length) {
    res.status(404).json({ error: "Request not found" });
    return;
  }

  saveRepairRequests(filtered);
  res.json({ success: true });
};

// CMS Content abrufen
export const handleGetCMSContent: RequestHandler = (req, res) => {
  const session = req.cookies.admin_session;
  if (session !== "authenticated") {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const content = getCMSContent();
  res.json(content);
};

// CMS Content speichern
export const handleSaveCMSContent: RequestHandler = (req, res) => {
  const session = req.cookies.admin_session;
  if (session !== "authenticated") {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const content = req.body;
  saveCMSContent(content);

  res.json({ success: true });
};
