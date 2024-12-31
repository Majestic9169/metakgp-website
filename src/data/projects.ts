import { Project } from "../types/project";
import { projectImages } from "../assets/Projects-cards/index";

export const projects: Project[] = [
  {
    id: "gyft",
    backgroundImage: projectImages.gyft.background,
    titleImage: projectImages.gyft.title,
    githubLink: "https://github.com/metakgp/gyft",
    websiteLink: "https://gyft.metakgp.org/",
    projectDescription: "Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.",
    stars: 57
  },
];