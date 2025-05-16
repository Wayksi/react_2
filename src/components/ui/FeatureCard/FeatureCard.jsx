import React from "react";
import Title from "@ui/Title/Title";
import { TitleSize } from "@ui/Title/titleSize";
import eat1 from "@assets/feature-card/eat1.svg";
import "./style.css";

function FeatureCard() {
    return (
        <section className="feature">
            <header className="feature__header">
                <img className="feature__img" width={56} height={56} src={eat1} alt="Еда намного вкуснее" />
                <div>
                    <span className="feature__owner">Фермерские продукты</span>
                    <Title size={TitleSize.EXTRA_SMALL}>Еда намного вкуснее</Title>
                </div>
            </header>
            <p className="feature__text">
                Домашняя колбаса из&nbsp;мяса, соли и&nbsp;специй и&nbsp;колбаса
                из&nbsp;магазина&nbsp;&mdash; два настолько разных продукта, что они
                даже не&nbsp;родственники
            </p>
        </section>
    );
}

export default FeatureCard;
