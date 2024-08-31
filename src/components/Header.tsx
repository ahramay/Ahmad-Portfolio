/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 01/09/2024 - 02:42:46
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/09/2024
    * - Author          : 
    * - Modification    : 
**/
import React from "react";
import { createClient } from "@/prismicio";

import NavBar from "@/components/NavBar";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
      <NavBar settings={settings} />
    </header>
  );
}
