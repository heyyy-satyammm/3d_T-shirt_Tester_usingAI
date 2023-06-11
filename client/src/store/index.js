import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#80C670",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./test-logo.png",
  fullDecal: "./test-logo.png",
});

export default state;
