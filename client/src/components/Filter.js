import React from 'react'

export default function Filter() {
  return (
    <>
        <div className="main-body-filter">
            <div className="main-body-filter-div">
                <div className="sorting">
                    <p className="sorting-title">SORT</p>
                    <select name="sort_value" id="sort_value">
                        <option value="">SELECT</option>
                        <option value="lowToHigh">PRICE: LOW TO HIGH</option>
                        <option value="highTolow">PRICE: HIGH TO LOW</option>
                    </select>

                    <p className="sorting-title filter-title">FILTER</p>
                    <select name="sort_value filter-title" id="sort_value">
                        <option value="">SELECT</option>
                        <option value="">RS. 2000 - 3000</option>
                        <option value="">RS. 3000 - 5000</option>
                        <option value="">RS. 5000 - 8000</option>
                        <option value="">RS. 8000 - 13000</option>
                        <option value="">RS. 13000 - 18000+</option>
                    </select>

                    <select name="sort_value filter-title" id="sort_value">
                        <option value="">SELECT</option>
                        <option value="">CAPACITY-1SEATER</option>
                        <option value="">CAPACITY-2SEATER</option>
                        <option value="">CAPACITY-3SEATER</option>
                        <option value="">CAPACITY-4SEATER</option>
                        <option value="">CAPACITY-5SEATER</option>
                    </select>

                    <select name="sort_value filter-title" id="sort_value">
                        <option value="">SELECT</option>
                        <option value="">4 STAR RATING</option>
                        <option value="">4.5 STAR RATING</option>
                        <option value="">5 STAR</option>
                    </select>
                </div>
            </div>
        </div>
    </>
  )
}
