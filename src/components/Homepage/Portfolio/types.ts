export type Project = {
  name: string;
  id: string;
  description: string;
  type: string;
  technologies: string;
  demo: string;
  link: string;
  images: {
    image: string;
    legend: string;
  }[];
};
