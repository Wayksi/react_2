import React from "react";
import Title from "@ui/Title/Title";
import Button from "@ui/Button/Button";
import FeatureCard from "@ui/FeatureCard/FeatureCard";
import "./style.css";

function FeaturesList() {
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
