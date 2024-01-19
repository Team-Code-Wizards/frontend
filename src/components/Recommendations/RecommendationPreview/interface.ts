import { StaticImport } from "next/dist/shared/lib/get-img-props";
export default interface IReccomendationPreview {
  id: number;
  title: string;
  info: string;
  image: string | StaticImport;
}
