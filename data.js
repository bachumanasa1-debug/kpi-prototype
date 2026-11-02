// =====================================================================
// data.js: THE "PANTRY"
// ---------------------------------------------------------------------
// ⚠️ FAKE DATA. Every number below is made up for practice.
// No real hospital, clinician or patient data is used anywhere.
//
// Each row = one department in one week.
//   department          : which hospital department
//   week                : week number since launch (1 to 8)
//   eligibleClinicians  : how many clinicians COULD use the tool
//   activeUsers         : how many DID use it that week
//   notesDrafted        : clinical notes the AI drafted that week
//   minutesSaved        : estimated documentation time saved that week
//
// 6 departments x 8 weeks = 48 rows.
// =====================================================================

const ADOPTION_DATA = [
  // --- Emergency ---
  { department: "Emergency", week: 1, eligibleClinicians: 40, activeUsers: 8, notesDrafted: 240, minutesSaved: 960 },
  { department: "Emergency", week: 2, eligibleClinicians: 40, activeUsers: 12, notesDrafted: 360, minutesSaved: 1440 },
  { department: "Emergency", week: 3, eligibleClinicians: 40, activeUsers: 16, notesDrafted: 480, minutesSaved: 1920 },
  { department: "Emergency", week: 4, eligibleClinicians: 40, activeUsers: 20, notesDrafted: 600, minutesSaved: 2400 },
  { department: "Emergency", week: 5, eligibleClinicians: 40, activeUsers: 23, notesDrafted: 690, minutesSaved: 2760 },
  { department: "Emergency", week: 6, eligibleClinicians: 40, activeUsers: 26, notesDrafted: 780, minutesSaved: 3120 },
  { department: "Emergency", week: 7, eligibleClinicians: 40, activeUsers: 28, notesDrafted: 840, minutesSaved: 3360 },
  { department: "Emergency", week: 8, eligibleClinicians: 40, activeUsers: 30, notesDrafted: 900, minutesSaved: 3600 },

  // --- Cardiology ---
  { department: "Cardiology", week: 1, eligibleClinicians: 25, activeUsers: 5, notesDrafted: 100, minutesSaved: 600 },
  { department: "Cardiology", week: 2, eligibleClinicians: 25, activeUsers: 8, notesDrafted: 160, minutesSaved: 960 },
  { department: "Cardiology", week: 3, eligibleClinicians: 25, activeUsers: 11, notesDrafted: 220, minutesSaved: 1320 },
  { department: "Cardiology", week: 4, eligibleClinicians: 25, activeUsers: 13, notesDrafted: 260, minutesSaved: 1560 },
  { department: "Cardiology", week: 5, eligibleClinicians: 25, activeUsers: 15, notesDrafted: 300, minutesSaved: 1800 },
  { department: "Cardiology", week: 6, eligibleClinicians: 25, activeUsers: 17, notesDrafted: 340, minutesSaved: 2040 },
  { department: "Cardiology", week: 7, eligibleClinicians: 25, activeUsers: 18, notesDrafted: 360, minutesSaved: 2160 },
  { department: "Cardiology", week: 8, eligibleClinicians: 25, activeUsers: 19, notesDrafted: 380, minutesSaved: 2280 },

  // --- Pediatrics ---
  { department: "Pediatrics", week: 1, eligibleClinicians: 30, activeUsers: 6, notesDrafted: 150, minutesSaved: 750 },
  { department: "Pediatrics", week: 2, eligibleClinicians: 30, activeUsers: 9, notesDrafted: 225, minutesSaved: 1125 },
  { department: "Pediatrics", week: 3, eligibleClinicians: 30, activeUsers: 12, notesDrafted: 300, minutesSaved: 1500 },
  { department: "Pediatrics", week: 4, eligibleClinicians: 30, activeUsers: 15, notesDrafted: 375, minutesSaved: 1875 },
  { department: "Pediatrics", week: 5, eligibleClinicians: 30, activeUsers: 18, notesDrafted: 450, minutesSaved: 2250 },
  { department: "Pediatrics", week: 6, eligibleClinicians: 30, activeUsers: 20, notesDrafted: 500, minutesSaved: 2500 },
  { department: "Pediatrics", week: 7, eligibleClinicians: 30, activeUsers: 22, notesDrafted: 550, minutesSaved: 2750 },
  { department: "Pediatrics", week: 8, eligibleClinicians: 30, activeUsers: 24, notesDrafted: 600, minutesSaved: 3000 },

  // --- Oncology ---
  { department: "Oncology", week: 1, eligibleClinicians: 20, activeUsers: 4, notesDrafted: 72, minutesSaved: 504 },
  { department: "Oncology", week: 2, eligibleClinicians: 20, activeUsers: 6, notesDrafted: 108, minutesSaved: 756 },
  { department: "Oncology", week: 3, eligibleClinicians: 20, activeUsers: 8, notesDrafted: 144, minutesSaved: 1008 },
  { department: "Oncology", week: 4, eligibleClinicians: 20, activeUsers: 10, notesDrafted: 180, minutesSaved: 1260 },
  { department: "Oncology", week: 5, eligibleClinicians: 20, activeUsers: 11, notesDrafted: 198, minutesSaved: 1386 },
  { department: "Oncology", week: 6, eligibleClinicians: 20, activeUsers: 13, notesDrafted: 234, minutesSaved: 1638 },
  { department: "Oncology", week: 7, eligibleClinicians: 20, activeUsers: 14, notesDrafted: 252, minutesSaved: 1764 },
  { department: "Oncology", week: 8, eligibleClinicians: 20, activeUsers: 15, notesDrafted: 270, minutesSaved: 1890 },

  // --- Orthopedics (deliberately low adoption, useful for the Phase 3 "needs attention" flag) ---
  { department: "Orthopedics", week: 1, eligibleClinicians: 22, activeUsers: 2, notesDrafted: 30, minutesSaved: 150 },
  { department: "Orthopedics", week: 2, eligibleClinicians: 22, activeUsers: 3, notesDrafted: 45, minutesSaved: 225 },
  { department: "Orthopedics", week: 3, eligibleClinicians: 22, activeUsers: 3, notesDrafted: 45, minutesSaved: 225 },
  { department: "Orthopedics", week: 4, eligibleClinicians: 22, activeUsers: 4, notesDrafted: 60, minutesSaved: 300 },
  { department: "Orthopedics", week: 5, eligibleClinicians: 22, activeUsers: 4, notesDrafted: 60, minutesSaved: 300 },
  { department: "Orthopedics", week: 6, eligibleClinicians: 22, activeUsers: 5, notesDrafted: 75, minutesSaved: 375 },
  { department: "Orthopedics", week: 7, eligibleClinicians: 22, activeUsers: 5, notesDrafted: 75, minutesSaved: 375 },
  { department: "Orthopedics", week: 8, eligibleClinicians: 22, activeUsers: 4, notesDrafted: 60, minutesSaved: 300 },

  // --- Internal Medicine ---
  { department: "Internal Medicine", week: 1, eligibleClinicians: 45, activeUsers: 10, notesDrafted: 280, minutesSaved: 1680 },
  { department: "Internal Medicine", week: 2, eligibleClinicians: 45, activeUsers: 15, notesDrafted: 420, minutesSaved: 2520 },
  { department: "Internal Medicine", week: 3, eligibleClinicians: 45, activeUsers: 20, notesDrafted: 560, minutesSaved: 3360 },
  { department: "Internal Medicine", week: 4, eligibleClinicians: 45, activeUsers: 25, notesDrafted: 700, minutesSaved: 4200 },
  { department: "Internal Medicine", week: 5, eligibleClinicians: 45, activeUsers: 29, notesDrafted: 812, minutesSaved: 4872 },
  { department: "Internal Medicine", week: 6, eligibleClinicians: 45, activeUsers: 32, notesDrafted: 896, minutesSaved: 5376 },
  { department: "Internal Medicine", week: 7, eligibleClinicians: 45, activeUsers: 34, notesDrafted: 952, minutesSaved: 5712 },
  { department: "Internal Medicine", week: 8, eligibleClinicians: 45, activeUsers: 36, notesDrafted: 1008, minutesSaved: 6048 },
];
