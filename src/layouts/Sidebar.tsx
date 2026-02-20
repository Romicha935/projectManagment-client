"use client";

import { useState } from "react";

const LayoutDashboardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
  </svg>
);

const FolderIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const TeamIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const CheckSquareIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const navItems = [
  { label: "Dashboard", icon: <LayoutDashboardIcon /> },
  { label: "Projects", icon: <FolderIcon /> },
  { label: "Team", icon: <TeamIcon /> },
  { label: "Settings", icon: <SettingsIcon /> },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workspaceOpen, setWorkspaceOpen] = useState(false);

  export const SidebarContent = () => (
    <div className="flex flex-col h-full bg-white">
      {/* Workspace Header */}
      <div className="px-4 py-5 border-b border-gray-100">
        <button
          onClick={() => setWorkspaceOpen(!workspaceOpen)}
          className="flex items-center justify-between w-full group"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              S
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900 leading-tight">Softvence</p>
              <p className="text-xs text-gray-400 leading-tight">1 workspace</p>
            </div>
          </div>
          <span className="text-gray-400 transition-transform duration-200" style={{ transform: workspaceOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
            <ChevronDownIcon />
          </span>
        </button>

        {/* Workspace dropdown */}
        {workspaceOpen && (
          <div className="mt-3 rounded-xl border border-gray-100 bg-gray-50 p-2 shadow-sm">
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white cursor-pointer transition-colors">
              <div className="w-5 h-5 rounded bg-violet-600 flex items-center justify-center text-white text-xs font-bold">S</div>
              <span className="text-xs font-medium text-gray-700">Softvence HQ</span>
              <span className="ml-auto text-violet-500">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              </span>
            </div>
            <button className="flex items-center gap-2 px-2 py-1.5 w-full rounded-lg hover:bg-white cursor-pointer transition-colors mt-0.5">
              <div className="w-5 h-5 rounded border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </div>
              <span className="text-xs text-gray-400">Add workspace</span>
            </button>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="px-3 py-4 flex-1 overflow-y-auto">
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const isActive = active === item.label;
            return (
              <li key={item.label}>
                <button
                  onClick={() => {
                    setActive(item.label);
                    setMobileOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150
                    ${isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                    }
                  `}
                >
                  <span className={isActive ? "text-gray-700" : "text-gray-400"}>
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Divider */}
        <div className="my-4 border-t border-gray-100" />

        {/* My Tasks */}
        <button className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-all duration-150 group">
          <div className="flex items-center gap-3">
            <span className="text-gray-400 group-hover:text-gray-600">
              <CheckSquareIcon />
            </span>
            <span>My Tasks</span>
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-gray-100 text-gray-500 text-xs font-semibold">
              0
            </span>
          </div>
          <span className="text-gray-300 group-hover:text-gray-400">
            <ChevronRightIcon />
          </span>
        </button>

        {/* Projects Section */}
        <div className="mt-4">
          <button className="w-full flex items-center justify-between px-3 py-1.5 group">
            <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
              Projects
            </span>
            <span className="text-gray-300 group-hover:text-gray-400 transition-colors">
              <ChevronRightIcon />
            </span>
          </button>

          {/* Empty state */}
          <div className="mt-3 mx-3 rounded-xl border border-dashed border-gray-200 p-4 text-center">
            <p className="text-xs text-gray-400">No projects yet</p>
            <button className="mt-1.5 text-xs font-medium text-violet-500 hover:text-violet-600 transition-colors">
              + Create project
            </button>
          </div>
        </div>
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center text-white text-xs font-semibold">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-gray-800 truncate">Admin User</p>
            <p className="text-xs text-gray-400 truncate">admin@softvence.com</p>
          </div>
          <button className="text-gray-300 hover:text-gray-500 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-40 p-2 rounded-xl bg-white shadow-md border border-gray-100 text-gray-600 hover:text-gray-900 transition-colors md:hidden"
        aria-label="Open menu"
      >
        <MenuIcon />
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`
          fixed top-0 left-0 h-full w-72 z-50 shadow-2xl transition-transform duration-300 ease-out md:hidden
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <XIcon />
          </button>
        </div>
      
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-screen sticky top-0 border-r border-gray-100 flex-shrink-0">
        <SidebarContent />
      </aside>

      {/* Demo Main Content (desktop only for context) */}
      <main className="hidden md:flex flex-1 bg-gray-50/50 items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center mx-auto mb-3">
            <LayoutDashboardIcon />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">{active}</h2>
          <p className="text-sm text-gray-400 mt-1">Select a section from the sidebar</p>
        </div>
      </main>
    </>
  );
}