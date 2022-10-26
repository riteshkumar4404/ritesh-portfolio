import { array } from "prop-types";

export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            title: "title",
            description: "Title of the project",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            Options: {
                hotspot: true,
            }
        },
        {
            name: "summary",
            title: "Summary",
            type: "text",
        },
        {
            name: "techonologies",
            title: "Techonologies",
            type: "array",
            of: [{ type: "reference", to: { type: "skill" } }],
        },
        {
            name: "linkToBuild",
            title: "LinkToBuild",
            type: "url",
        }
    ],
}