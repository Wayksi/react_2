import React from "react";
import Title from "@ui/Title/Title";
import Button from "@ui/Button/Button";
import FeatureCard from "@ui/FeatureCard/FeatureCard";
import "./style.css";

function FeaturesList({ features }) {
    return features && features.length ? (
        <section className="features">
            <Title as="h2">Почему фермерские продукты лучше?</Title>
            <ul className="features__list">
                {features.map((feature) => (
                    <li className="features__item" key={feature.id}>
                        <FeatureCard {...feature} />
                    </li>
                ))}
            </ul>
            <Button>Купить</Button>
        </section>
    ) : null;
}

export default FeaturesList;
