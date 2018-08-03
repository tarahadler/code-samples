import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'; 
import ProductList from './ProductList.js';
import ProductItem from './ProductItem.js';
//import {products} from "./products";


class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [
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
                        bluesign: true, 
                        fairtrade: true
                    }, 
                    thumbnail: "/images/puffy-jacket-th.jpg",
                    images: [
                        "/images/puffy-jacket-1.jpg",
                        "/images/puffy-jacket-2.jpg",
                    ],
                    detailsFit: "Regular fit. Alpaca fibre insulation. Zipper has wicking interior storm flap and pillowing at chin for comfort.",
                    madeBy: "Eugenia Makoto"
                }, 
                {
                    id: 2,
                    brand: "Andy Sandy",
                    name: "Emmet Sandals",
                    price: "$79.00",
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
                            notes: "Labels manufactured in Meadville, Pennsylvania", 
                            windowOpen: false
                        }
                    ],
                    story: "Andy Sandy Emmet sandals are completely made from vegan leather with natural dyes. Andreas Mena's curiousity has resulted in innovate product lines that are at the cutting edge of making shoes. ",
                    scores: {
                        carbon: 2,
                        water: 2,
                        chemicals: 3, 
                        policy: "A", 
                        audit: "B",
                        traceability: "B",
                        bluesign: false, 
                        fairtrade: true
                    }, 
                    thumbnail: "/images/sand-sandals-th.jpg",
                    images: [
                        "/images/sandals-iso.jpg",
                        "/images/sandals-2.jpg",
                        "/images/sandals-3.jpg",
                    ],

                    
                    detailsFit: "Comfortable fit. Alpaca wool weave keeps you warm when it's cold and cool when it's hot.",
                    madeBy: "Paola Pederson"
                },
                {
                    id: 3,
                    brand: "Fitz & Roy",
                    name: "Atacama Sweater",
                    price: "$189.00",
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
                            notes: "Labels manufactured in Meadville, Pennsylvania", 
                            windowOpen: false
                        }
                    ],
                    story: "Juan Diego Fitzgerald, affectionately known as Fitz, met Roy Woods on adventure to Monte Fitz Roy in Patagonia. Together, the two got to know the communities of the southern hemisphere – including the artisan weavers of the Atacama. Fitz & Roy brings that craftsmanship into the spotlight, and possibly into your home.",
                    scores: {
                        carbon: 2,
                        water: 1,
                        chemicals: 1, 
                        policy: "A+", 
                        audit: "B",
                        traceability: "A+",
                        bluesign: false, 
                        fairtrade: true
                    }, 
                    thumbnail: "/images/yellow-sweater-th.jpg",
                    images: [
                        "/images/yellow-sweater-2.jpg",
                        "/images/yellow-sweater-3.jpg",
                        "/images/yellow-sweater-iso.jpg",
                    ],
                    detailsFit: "Comfortable fit. Alpaca wool weave keeps you warm when it's cold and cool when it's hot.",
                    madeBy: "Paola Pederson"
                },
                {
                    id: 4,
                    brand: "Soft Rock",
                    name: "Pioneer Sweater",
                    price: "$79.99",
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
                            notes: "Labels manufactured in Meadville, Pennsylvania", 
                            windowOpen: false
                        }
                    ],
                    story: "Andy Sandy Emmet sandals are completely made from vegan leather with natural dyes. Andreas Mena's curiousity has resulted in innovate product lines that are at the cutting edge of making shoes. ",
                    scores: {
                        carbon: 2,
                        water: 3,
                        chemicals: 2, 
                        policy: "A+", 
                        audit: "B",
                        traceability: "A+",
                        bluesign: true, 
                        fairtrade: false
                    }, 
                    thumbnail: "/images/radio-guy.jpg",
                    images: [
                        "/images/iceland-sweater-1.jpg",
                        "/images/iceland-sweater-2.jpg",
                        "/images/sandals-3.jpg",
                    ],
                    detailsFit: "Comfortable fit. Alpaca wool weave keeps you warm when it's cold and cool when it's hot.",
                    madeBy: "Joanna Featherbottom"
                },
                {
                    id: 5,
                    brand: "Clean Jeans",
                    name: "Rockette Jean",
                    price: "$79.00",
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
                            notes: "Labels manufactured in Meadville, Pennsylvania", 
                            windowOpen: false
                        }
                    ],
                    story: "Andy Sandy Emmet sandals are completely made from vegan leather with natural dyes. Andreas Mena's curiousity has resulted in innovate product lines that are at the cutting edge of making shoes. ",
                    scores: {
                        carbon: 2,
                        water: 5,
                        chemicals: 3, 
                        policy: "A+", 
                        audit: "A",
                        traceability: "A+",
                        bluesign: false, 
                        fairtrade: true
                    }, 
                    thumbnail: "/images/jeans-tennis.jpg",
                    images: [
                        "/images/jeans-girl-1.jpg",
                        "/images/jeans-girl-2.jpg",
                        "/images/sandals-3.jpg",
                    ],
                    detailsFit: "Comfortable fit. Alpaca wool weave keeps you warm when it's cold and cool when it's hot.",
                    madeBy: "Paola Pederson"
                },
                {
                    id: 6,
                    brand: "Lola & Lila",
                    name: "Maya Skirt",
                    price: "$79.00",
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
                            notes: "Labels manufactured in Meadville, Pennsylvania", 
                            windowOpen: false
                        }
                    ],
                    story: "Andy Sandy Emmet sandals are completely made from vegan leather with natural dyes. Andreas Mena's curiousity has resulted in innovate product lines that are at the cutting edge of making shoes. ",
                    scores: {
                        carbon: 2,
                        water: 1,
                        chemicals: 1, 
                        policy: "A+", 
                        audit: "B",
                        traceability: "A+",
                        bluesign: false, 
                        fairtrade: false
                    }, 
                    thumbnail: "/images/green-skirt-th.jpg",
                    images: [
                        "/images/green-skirt-1.jpg",
                        "/images/green-skirt-3.jpg",
                        "/images/green-skirt-2.jpg",
                    ],
                    detailsFit: "Comfortable fit. Alpaca wool weave keeps you warm when it's cold and cool when it's hot.",
                    madeBy: "Paola Pederson"
                },
                {
                    id: 7,
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
                        carbon: 4,
                        water: 3,
                        chemicals: 3, 
                        policy: "A", 
                        audit: "A",
                        traceability: "B",
                        bluesign: true, 
                        fairtrade: false
                    }, 
                    thumbnail: "/images/trail-runners-th.jpg",
                    images: [
                        "/images/trail-runners-1.jpg",
                        "/images/trail-runners-2.jpg",
                    ],
                    detailsFit: "Fits true to size. For those with wide feet, take half a size up.",
                    madeBy: "Novak Nowicki"
                },
                {
                    id: 8,
                    brand: "Jim Jims",
                    name: "Jet Joe Jean",
                    price: "$79.00",
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
                            notes: "Labels manufactured in Meadville, Pennsylvania", 
                            windowOpen: false
                        }
                    ],
                    story: "Andy Sandy Emmet sandals are completely made from vegan leather with natural dyes. Andreas Mena's curiousity has resulted in innovate product lines that are at the cutting edge of making shoes. ",
                    scores: {
                        carbon: 1,
                        water: 4,
                        chemicals: 4, 
                        policy: "A", 
                        audit: "A",
                        traceability: "B",
                        bluesign: false, 
                        fairtrade: true
                    }, 
                    thumbnail: "/images/skateboard-guy-th.jpg",
                    images: [
                        "/images/yellow-jeans-m-1.jpg",
                        "/images/skateboard-guy-2.jpg",
                        "/images/sandals-3.jpg",
                    ],                  
                    detailsFit: "Comfortable fit. Alpaca wool weave keeps you warm when it's cold and cool when it's hot.",
                    madeBy: "Paola Pederson"
                },
                {
                    id: 9,
                    brand: "Andy Sandy",
                    name: "Pine Plaid",
                    price: "$79.00",
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
                            notes: "Labels manufactured in Meadville, Pennsylvania", 
                            windowOpen: false
                        }
                    ],
                    story: "Andy Sandy Emmet sandals are completely made from vegan leather with natural dyes. Andreas Mena's curiousity has resulted in innovate product lines that are at the cutting edge of making shoes. ",
                    scores: {
                        carbon: 2,
                        water: 2,
                        chemicals: 2, 
                        policy: "A+", 
                        audit: "B",
                        traceability: "A+",
                        bluesign: false, 
                        fairtrade: true
                    }, 
                    thumbnail: "/images/man-in-plaid.jpg",
                    images: [
                        "/images/plaid-shirt-1.jpg",
                        "/images/plaid-shirt-2.jpg",
                        "/images/sandals-3.jpg",
                    ],
                    detailsFit: "Comfortable fit. Alpaca wool weave keeps you warm when it's cold and cool when it's hot.",
                    madeBy: "Drew"
                },
            ]
        } 
    }
    
    showSettings (event) {
        event.preventDefault();
      }
    

    render() {
        //console.log(products)
        return (
            <div>     
                <Switch>
                {/* Switch between SongList view and dynamic SongDetails views. */}
                    <Route 
                        exact path="/shop/productlist" 
                        render={()=><ProductList 
                        /* Props for ProductList go here */
                            product={this.state.product}
                        />
                        }
                        />
                    <Route 
                        path='/shop/productlist/:productId'
                        render={(props)=> { return <ProductItem 
                        /* Props for each ProductItem goes here */
                            match={props.match}
                            product={this.state.product}          
                        />
                        }}                    
                        />
                </Switch> 

            </div>
        );
    }
}

export default Shop;