import React from "react";
import Title from "@ui/Title/Title";
import Button from "@ui/Button/Button";
import FeatureCard from "@ui/FeatureCard/FeatureCard";
import "./style.css";

// eslint-disable-next-line no-unused-vars
function FeaturesList({ features }) {
    return (
        <section className="features">
            <Title>Почему фермерские продукты лучше?</Title>
            <ul className="features__list">
                <li className="features__item">
                    <FeatureCard />
                </li>
            </ul>
            <Button>Купить</Button>
        </section>
    );
}

export default FeaturesList;
