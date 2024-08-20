import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Make the server accessible from other devices on the network
    port: 5173, // Port number (ensure this matches the port you're using)
  },
});
