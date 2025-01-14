import { React } from "react";
import { ContentContainer } from "./style";

function PageContentContainer(props) {
    return (
        <ContentContainer>
            {props.children}
        </ContentContainer>
    );
}

export default PageContentContainer;
