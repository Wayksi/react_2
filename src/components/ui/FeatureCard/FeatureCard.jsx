import React from "react";
import Title, { TitleSize } from "@ui/Title/Title";
import { Feature, Image, Owner, Header, Text } from "./style";

function FeatureCard({ title, owner, about, isNegative, image }) {
    return (
        <Feature $isNegative={isNegative}>
            <Header>
                <Image width={56} height={56} src={image} alt={title} />
                <div>
                    <Owner $isNegative={isNegative}>{owner}</Owner>
                    <Title size={TitleSize.EXTRA_SMALL} as="h3">{title}</Title>
                </div>
            </Header>
            <Text dangerouslySetInnerHTML={{ __html: about }} />
        </Feature>
    );
}

export default FeatureCard;
