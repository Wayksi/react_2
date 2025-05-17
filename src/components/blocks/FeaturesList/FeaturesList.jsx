import React from "react";
import FeatureCard from "@ui/FeatureCard/FeatureCard";
import { Ul, Li } from "@components/styled";
import { Features, StyledButton, StyledTitle } from "./style";

function FeaturesList({ features }) {
    return features && features.length ? (
        <Features>
            <StyledTitle as="h2">Почему фермерские продукты лучше?</StyledTitle>
            <Ul $isGridList>
                {features.map((feature) => (
                    <Li key={feature.id}>
                        <FeatureCard {...feature} />
                    </Li>
                ))}
            </Ul>
            <StyledButton>Купить</StyledButton>
        </Features>
    ) : null;
}

export default FeaturesList;
