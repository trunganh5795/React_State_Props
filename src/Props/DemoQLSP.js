import React, { Component } from 'react'
import SanPhamDemo from './SanPhamDemo'
export default class DemoQLSP extends Component {
    state = {
        spChiTiet: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        }
    }


    mangSanPham = [
        {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },

        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "Android 9.0 (Pie); Flyme",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 7600000,
            "hinhAnh": "./img/meizuphone.jpg"
        },

        {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "./img/applephone.jpg"
        }
    ]
    renderSanPhan = () => {
        let arrDiv = this.mangSanPham.map((items, index) => {
            return <div key="{index}" className="col-4">
                {/* <div className="card text-left">
                    <img className="card-img-top" src={items.hinhAnh} alt={items.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{items.tenSP}</h4>
                        <p className="card-text">{items.giaBan}</p>
                        <button onClick={() => {
                                this.xemChiTiet(items)
                         }} className="btn btn-success">Xem chi tiết</button>
                    </div>
                </div> */}
                <SanPhamDemo sanPham={items} chiTiet={this.xemChiTiet}/>

            </div>

        })
        return arrDiv;
    }

    xemChiTiet = (spClick) => {
            // console.log(spClick)
            this.setState({
                spChiTiet:spClick
            })
    }
    render() {
        let { hinhAnh, manHinh, heDieuHanh, ram, rom, cameraSau, cameraTruoc, tenSP } = this.state.spChiTiet;
        return (
            <div className="container">
                <div className="row">
                    {this.renderSanPhan()}
                </div>
                <div className="row mt-5">
                    <div className="col-4">
                        <h3>{tenSP}</h3>
                        <img className="card-img-top" src={hinhAnh} alt={hinhAnh} />
                    </div>
                    <div className="col-8">
                        <h3>Thông Số</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Màn Hình</th>
                                    <th>{manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ Điều Hành</th>
                                    <th>{heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <th>{cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <th>{ram}</th>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <th>{rom}</th>
                                </tr>

                            </thead>

                        </table>
                    </div>

                </div>
            </div>
        )
    }
}
