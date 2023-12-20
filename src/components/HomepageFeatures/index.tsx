import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Serviços de Oficina',
    Svg: require('@site/static/img/undraw_automobile_repair_ywci.svg').default,
    description: (
      <>
        Seja uma simples troca de óleo, reparos mecânicos mais complexos, 
        serviços de manutenção preventiva ou diagnósticos avançados, estamos 
        aqui para proporcionar um atendimento de qualidade excepcional. Nossa oficina 
        é equipada com tecnologia de ponta, permitindo-nos lidar eficientemente com desafios 
        mecânicos e elétricos.
      </>
    ),
  },
  {
    title: 'Variedade',
    Svg: require('@site/static/img/undraw_pen_tool_re_s9.svg').default,
    description: (
      <>
        Nos destacamos pela expertise em lidar não apenas com uma ampla variedade de veículos, 
        mas também com uma diversidade de objetos essenciais para o seu estilo de vida automotivo. 
        Desde carros de passeio a veículos utilitários, motocicletas, e até mesmo acessórios 
        como capacetes.
      </>
    ),
  },
  {
    title: 'Serviço Veicular Premium',
    Svg: require('@site/static/img/undraw_on_the_way_re_swjt.svg').default,
    description: (
      <>
        Oferecemos entrega e devolução gratuitas, rapidez no centro em até 1 hora, 
        preservação da garantia do construtor e facilidades de pagamento em até 3 
        ou 4 vezes sem juros. Sua jornada, nossa prioridade.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
