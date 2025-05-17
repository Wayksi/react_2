const icons = import.meta.glob('@assets/feature-card/*svg', {
  eager: true,
  import: 'default',
});

const iconMap = Object.fromEntries(
  Object.entries(icons).map(([path, src]) => {
    const filename = path.split('/').pop().replace('.svg', '');
    return [filename, src]
  })
);

const features = [
  {
    id: 0,
    title: 'Еда намного вкуснее',
    owner: 'Фермерские продукты',
    isNegative: false,
    imageName: 'eat1',
    about: 'Домашняя колбаса из&nbsp;мяса, соли и&nbsp;специй и&nbsp;колбаса из&nbsp;магазина&nbsp;&mdash; два настолько разных продукта, что они даже не&nbsp;родственники',
  },
  {
    id: 1,
    title: 'Просроченные продукты',
    owner: 'Магазинные продукты',
    isNegative: true,
    imageName: 'garbage1',
    about: 'Из-за большого количества товаров сотрудники магазинов не&nbsp;успевают своевременно производить замену товара',
  },
  {
    id: 3,
    title: 'Натуральные продукты',
    owner: 'Фермерские продукты',
    isNegative: false,
    imageName: 'sprout1',
    about: 'Поставляем местные органические продукты, выращенные без пестицидов и&nbsp;химических удобрений.',
  },
  {
    id: 4,
    title: 'Некачественное мясо',
    owner: 'Магазинные продукты',
    isNegative: true,
    imageName: 'no-meat1',
    about: 'Мясные полуфабрикаты, в&nbsp;которых содержится чрезмерно много натрия, вредных жиров, консервантов',
  },
];

const featuresWithImages = features.map((feature) => ({
  ...feature,
  image: iconMap[feature.imageName] || '',
}));

export default featuresWithImages;
