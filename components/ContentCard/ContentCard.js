import "./ContentCard.css";
export const ContentCard = (content) => `
    <div class="content-card">
        <ul>
            <li>
                <span class="content-title">${content.title}:</span> ${content.description}
            </li>
        </ul>
    </div>
`;