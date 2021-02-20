import React, { Component } from 'react'
import BTProductItem from './BTProductItem'

export default class BTProductList extends Component {
    mangSanPham = [

        { maSP: 1, tenSP: 'Black Berry', hinhAnh: './img/sp_blackberry.png', gia: 1000 },
        { maSP: 2, tenSP: 'Iphone X', hinhAnh: './img/sp_iphoneX.png', gia: 2000 },
        { maSP: 3, tenSP: 'Note 7', hinhAnh: './img/sp_note7.png', gia: 3000 },
        { maSP: 3, tenSP: 'Vivo 850', hinhAnh: './img/sp_vivo850.png', gia: 3000 }

    ]

    renderSanPham = () => {
        let arrDiv = this.mangSanPham.map((items, index) => {
            return <div key={index} className="col-3" >
                <BTProductItem hinhAnh={items.hinhAnh}/>
            </div >
        });
        return arrDiv
    }
    render() {
        return (
            <div className="container-fluid">
                <h1 className="text-center">BEST SMART PHONE</h1>
                <div className="row">
                    {/* <div className="col-3">
                        <BTProductItem />
                    </div>
                    <div className="col-3">
                        <BTProductItem />
                    </div>
                    <div className="col-3">
                        <BTProductItem />
                    </div>
                    <div className="col-3">
                        <BTProductItem />
                    </div> */}
                    {this.renderSanPham()}
                </div>

            </div>
        )
    }
}
