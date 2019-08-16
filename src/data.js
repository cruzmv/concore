import React from "react";

export let header = {
        logoSrc: "https://i.ibb.co/mNBzXkz/logo.png",
        hamburguer: "https://i.ibb.co/fdn2xrR/hamburguer.png",
        menu: [
                { title: "Home", link: "/" },
                { title: "Sprint Zero", link: "/sprintzero" },
                { title: "Innovation Squad", link: "/innovationsquad" },
                { title: "Blog", link: "/blog" }
        ]
    }
    
export let banner = {
      title: <h1>A revolução no <br/><b>desenvolvimento</b><br/>de inovação digital.</h1>,
      description: <p>Projeto e desenvolvimento de software prático, eficiente<br/>e dentro do orçamento.</p>
    }

export let about = {
      image1: "https://i.ibb.co/gSThfmR/img-section-about.png",
      image2: "https://i.ibb.co/wCJj8hV/divider-gradient.png",
      title: <h2>Grande parte dos projetos de software falham em custo, prazo<br/>ou valor entregue.</h2>,
      adText: "Os diferenciais Concore para fazer seu negócio crescer.",
      content: ["A Concore surgiu com a missão de descomplicar o desenvolvimento de software e tornar a inovação tecnológicaacessível para todas as empresas.",
                <b>Nós criamos a plataforma que permite desenvolver softwares customizados à uma fração do tempo tradicional.</b>,
                "Nossa ferramenta, aliada ao nosso time especialista em inovação, nos permite criar soluções em projetos desoftwares que atendem fielmente as regras do seu negócio."
      ],
      Cards: [
                {
                    title: "4x mais rápido",
                    img: "https://i.ibb.co/8PmrT6f/4x.png",
                    text: <p>Tecnologia própria que nos permite desenvolver de forma mais eficiente e rápida, <strong>economizando
                    preciosos recursos.</strong></p>
                },
                {
                    title: "Squad de inovação",
                    img: "https://i.ibb.co/FWYQbYc/squad.png",
                    text: <p><strong>Nossa equipe respira tecnologia e inovação há mais de 10 anos,</strong> gerando soluções
                    assertivas e práticas.</p>
                },
                {
                    title: "Data driven",
                    img: "https://i.ibb.co/GxtsCRc/datadriven.png",
                    text: <p>Criamos estimativas técnicas com base em dados científicos, <strong>gerando assertividade.</strong></p>
                }
      ]
    }

export let solutions = {
    title: <h2>Soluções Concore</h2>,
    titleSlide: <h2>Confira o impacto das soluções Concore para seus clientes.</h2>,
    img1: "https://i.ibb.co/wCJj8hV/divider-gradient.png",
    items: [
        {
            link: "/sprintzero",
            id: "sprint",
            img: "https://i.ibb.co/8PpHxQQ/logo-sprint-zero.png",
            alt: "Sprint zero",
            text: "Comece transformando a sua ideia em um projeto de software completo e com protótipo navegável."
        },
        {
            link: "/innovationsquad",
            id: "innovation",
            img: "https://i.ibb.co/fpWvVKS/logo-innovationsquad.png",
            alt: "Innovation squad",
            text: "Tenha a disposição uma equipe sênior para projeto e desenvolvimento do seu software."
        }
    ],
    carousel:[
                {
                    active: true,
                    img: "https://i.ibb.co/2Ykg2yD/case-ingresse.png",
                    alt: "Concore",
                    title: <h4>Cliente: Ingresse S.A</h4>,
                    subTitle: <h3>Diminuinos o tempo de repasses financeiros de horas para minutos.</h3>,
                    text: <p>Nós projetamos em conjunto com o setor financeiro da Ingresse uma ferramenta de solicitação e gestão de repasses financeiros. O processo de repasse era realizado por planilhas, o que resultava em eventuais erros, perdas e dificuldade de gestão em grande volume.</p>
                },
                {
                    active: false,
                    img: "https://i.ibb.co/2Ykg2yD/case-ingresse.png",
                    alt: "Concore",
                    title: <h4>Cliente: Ingresse S.A</h4>,
                    subTitle: <h3>Diminuinos o tempo de repasses financeiros de horas para minutos.</h3>,
                    text: <p>Nós projetamos em conjunto com o setor financeiro da Ingresse uma ferramenta de solicitação e gestão de repasses financeiros. O processo de repasse era realizado por planilhas, o que resultava em eventuais erros, perdas e dificuldade de gestão em grande volume.</p>
                }
    ]

}