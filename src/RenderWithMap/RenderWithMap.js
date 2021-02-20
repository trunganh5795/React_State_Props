import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    mangSinhVien = [
        { ma: 1, ten: 'nguyen van a' },
        { ma: 2, ten: 'nguyen van b' },
        { ma: 3, ten: 'nguyen van c' }
    ]

    renderSinhVien = () => {
        // const arrJSX = [];
        // for ( let index =0;index<this.mangSinhVien.length;index++){
        //     let tagP = <p key={index}>{this.mangSinhVien[index].ten}</p>;
        //     arrJSX.push(tagP);
        // }
        // console.log(arrJSX);
        // return arrJSX

        const arrJSX = this.mangSinhVien.map((sinhVien, index) => {
            return <li key={index}>
                {sinhVien.ten}
            </li>
        });
        console.log(arrJSX)
        return arrJSX
        
    }


    render() {
        return (

            <div className="container">
                <ul>
                    {this.renderSinhVien()}
                </ul>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã Sinh Viên</th>
                            <th>Tên Sinh Viên</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mangSinhVien.map((sinhVien,index)=>{
                            return <tr key={index}>
                                <td>{sinhVien.ma}</td>
                                <td>{sinhVien.ten}</td>
                                <td><button className="btn btn-danger">Xóa</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>

            </div>
                 // [<p key={1} > hello </p>, <p key={2}>Hello 2</p>]
            // cú pháp render nhiều thẻ trên mảng
            // this.renderSinhVien()

        )
    }
}
