export const products = [
        {
            id: 1,
            brand: "Osklen",
            name: "Man's Not Hot, Puff Jacket ",
            price: "$229.00",
            markers: [
                {
                    id: 100,
                    position: {
                        lat: -24.499998,
                        lng: -69.249999
                    },
                    notes: "Fibres for lining produced and spun in Atacama, Chile", 
                    windowOpen: true
                }, 
                {
                    id: 200,
                    position: {
                        lat: -23.55052,
                        lng: -46.63331
                    },
                    notes: "Fabrics woven in São Paulo, Brazil", 
                    windowOpen: false
                }, 
                {
                    id: 300,
                    position: {
                        lat: -22.90685,
                        lng: -43.17290
                    },
                    notes: "Garment produced and spun in Rio de Janeiro, Brazil", 
                    windowOpen: false
                }, 
                {
                    id: 400,    
                    position: {
                        lat: 41.64144, 
                        lng: -80.15145
                    },
                    notes: "Zipper manufactured in Meadville, Pennsylvania", 
                    windowOpen: false
                }
            ],
            story: "Oskar Metsavaht, founder and style director of Osklen and Instituto E, reaches back to his early years in fashion. In 1990, Metsavaht began his fashion career by designing winter sportswear, eventually focussing on the luxury segment a decade later. This jacket delivers the best of both worlds, allowing the owner to be active and aesthetic.",
            scores: {
                carbon: 3,
                water: 4,
                chemicals: 1, 
                policy: "A+", 
                audit: "B",
                traceability: "A+",
                bluesign: false, 
                fairtrade: false
            }, 
            thumbnail: "/images/puffy-jacket-th.jpg",
            image1: "/images/puffy-jacket-1.jpg",
            image2: "/images/puffy-jacket-2.jpg",
            detailsFit: "Regular fit. Alpaca fibre insulation. Zipper has wicking interior storm flap and pillowing at chin for comfort.",
            madeBy: "Eugenia Makoto"
        }, 
        {
            id: 2,
            brand: "Ibex",
            name: "Trail Runner 4.0",
            price: "$149.00",
            markers: [
                {
                    id: 1,
                    position: {
                        lat: -25.62622,
                        lng: -57.15206
                    },
                    notes: "Rubber soles manufactured in Paraguari, Paraguay", 
                    windowOpen: true
                }, 
                {
                    id: 2,
                    position: {
                        lat: 53.54439,
                        lng: -113.49093
                    },
                    notes: "Plastic and leather attachments produced and manufactured in Edmonton, Alberta", 
                    windowOpen: false
                }, 
                {
                    id: 3,
                    position: {
                        lat: 42.36008,
                        lng: -71.05888
                    },
                    notes: "Nylon weave produced and manufactured in Boston, Massachusetts", 
                    windowOpen: false
                }
            ],
            story: "The insole is a thin, flexible, durable layer of synthetic ethylene vinyl acetate (EVA). Midsole components, which provide bulk of cushioning, consists of polyurethane foam, surrounding capsules of compressed air. Outsoles are Pararubber, providing traction and shock absorption.",
            scores: {
                carbon: 2,
                water: 4,
                chemicals: 2, 
                policy: "B", 
                audit: "A",
                traceability: "C",
                bluesign: true, 
                fairtrade: false
            }, 
            thumbnail: "/images/trail-runners-th.jpg",
            image1: "/images/trail-runners-1.jpg",
            image2: "/images/trail-runners-2.jpg",
            detailsFit: "Fits true to size. For those with wide feet, take half a size up.",
            madeBy: "Novak Nowicki"
        }
    ]