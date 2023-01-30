import moment from "moment"
import React, { Suspense } from "react"

function StoreDetails(props) {
  const { store = {} } = props
  return (
    <Suspense fallback={"Loading details..."}>
      <div>
        <h3>{store.storename}</h3>
        <hr />
        <div
          style={{
            marginLeft: "10px",
            fontSize: "12px",
          }}
        >
          <span>
            <b>Address:</b> {store.address}, {store.city}, {store.stateprovince}, {store.country},{" "}
            {store.postalcode}
          </span>
          <br />
          <span>
            <b>Phone:</b> {store.phonenumber}
          </span>
          <br />
          <span>
            <b>Email:</b> {store.storeemail}
          </span>
          <br />
          <span>
            <b>Store Open Date:</b> {moment(store.storeopendate).format("MM/DD/YYYY")} (MM/DD/YYYY)
          </span>
          <br />
        </div>
      </div>
    </Suspense>
  )
}

export default StoreDetails
