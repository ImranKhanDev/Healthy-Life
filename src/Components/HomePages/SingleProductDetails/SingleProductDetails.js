import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import detailsBanner from "../../Assets/images/product_bg.jpg";
import free from "../../Assets/images/free.png";
import money from "../../Assets/images/money.png";
import back from "../../Assets/images/back.png";
import { Row, Col, Button, Modal, Form, FormGroup } from "react-bootstrap";
import {
  BsStarFill,
  BsStar,
  BsCartCheckFill,
  BsFacebook,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";
import { BiMessageAltDots, BiMessageEdit } from "react-icons/bi";
import productsDB from "../../Assets/FakeData/productsDB";
import useAuth from "../../../Hooks/useAuth";

const SingleProductDetails = (props) => {
  const { user } = useAuth();
  const { id } = useParams();

  const [show, setShow] = useState(false);
  const [lg, setLgShow] = useState(false);

  // add to cart modal state
  const [showCart, setShowCart] = useState(false);
  //wishlist  modal

  const [wish, setWish] = useState(false);

  // const [productsDetails, setProductsDetails] = useState(productsDB.SellerDb);
  const [productsDetails, setProductsDetails] = useState(productsDB);

  const detailsProducts = productsDetails?.find(
    (pDetails) => pDetails?.sellerdb.id == id
  );
  console.log(detailsProducts);
  return (
    <>
      {/* cart modal  */}
      <Modal
        size="sm"
        show={showCart}
        onHide={() => setShowCart(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Compare to others.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>This feature is coming soon.</Modal.Body>
      </Modal>

      <Modal
        size="sm"
        show={wish}
        onHide={() => setWish(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Set Wishlist
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>You must be logged in to set your wishlist.</Modal.Body>
      </Modal>
      {/* cart modal  */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            <small>
              <Form.Label>your email</Form.Label>
              <Form.Control
                // onChange={handleOnChange}
                type="name"
                name="name"
                defaultValue={user.email}
                placeholder="Your name"
              />{" "}
              <Form.Label>Product name</Form.Label>
              <Form.Control
                // onChange={handleOnChange}
                type="name"
                name="name"
                defaultValue={detailsProducts?.sellerdb?.name}
                placeholder="Your name"
              />
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                // onChange={handleOnChange}
                type="name"
                name="name"
                defaultValue={detailsProducts?.sellerdb?.price}
                placeholder="price"
              />
            </small>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <img
                    src={detailsProducts?.sellerdb?.img}
                    style={{ height: 240, width: 300 }}
                    alt="single_product_image"
                  />
                </div>
                <div>
                  <p>{detailsProducts?.sellerDb?.name}</p>
                  <p> {detailsProducts?.sellerDb?.price}</p>
                  <p>Dimensions : 40x60cm</p>
                  <p>
                    {" "}
                    <b>Quantity</b> :4
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <div className="singleProduct">
        <img src={detailsBanner} alt="product_background" />
        <h4>
          Best Seller &gt; Product Details &gt;{" "}
          {detailsProducts?.sellerdb?.name}
        </h4>
        <Row>
          <Col>
            <div className="singleProductImg">
              <img
                src={detailsProducts?.sellerdb?.img}
                alt="single_product_image"
              />
            </div>
          </Col>
          <Col>
            <div className="productContent text-start py-4">
              <div className="productTti">
                <h3>{detailsProducts?.sellerdb.name}</h3>
              </div>
              <div className="content d-flex justify-content-between align-items-center">
                <span style={{ color: "yellow", marginRight: 15 }}>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </span>
                <div
                  style={{ marginRight: 15 }}
                  className="message d-flex justify-content-between align-items-center"
                >
                  <BiMessageEdit
                    style={{ marginRight: "12px" }}
                  ></BiMessageEdit>

                  <p
                    onClick={() => setLgShow(true)}
                    className="d-flex align-items-center review"
                  >
                    Write a review
                  </p>
                </div>
                <div
                  style={{ marginRight: 15 }}
                  className="message d-flex justify-content-between align-items-center"
                >
                  <BiMessageAltDots
                    style={{ marginRight: "12px" }}
                    s
                  ></BiMessageAltDots>

                  <p
                    onClick={() => setLgShow(true)}
                    className="d-flex align-items-center review"
                  >
                    Read reviews
                  </p>
                </div>
              </div>
              <br />
              <h1 className="price">${detailsProducts?.sellerdb?.price}</h1>
              <br />
              <p className="description">
                Whether you're exploring the woods or the city, the Brixton™
                Patrol All Terrain Anorak Jacket has got you covered. Camo
                jacket crafted from 4.5 oz nylon ripstop with two-way stretch,
                and a water-repellent coating. Drawstring hood.
              </p>
              <br />
              <p>Dimensions</p>
              <form>
                <select>
                  <option value="40x60cm">40x60cm</option>
                  <option value="60x80cm">60x60cm</option>
                  <option value="120x140cm">120x140cm</option>
                </select>
                <br />
                <br />

                <div className="d-flex justify-content-start align-items-center">
                  <BiMessageEdit
                    style={{ marginRight: "8px", display: "flex" }}
                  ></BiMessageEdit>

                  <p
                    style={{ cursor: "pointer", display: "flex" }}
                    onClick={() => setShowCart(true)}
                    className="me-2"
                  >
                    Add to Comapre
                  </p>
                  <BiMessageEdit
                    style={{ marginRight: "8px", display: "flex" }}
                  ></BiMessageEdit>
                  <p
                    style={{ cursor: "pointer", display: "flex" }}
                    onClick={() => setWish(true)}
                    className="me-2"
                  >
                    Add to wishlist.
                  </p>
                </div>
                <br />
              </form>
              <Button className="btn-cart" onClick={() => setShow(true)}>
                Add to Cart
              </Button>
            </div>

            <div className="social text-start" style={{ cursor: "pointer" }}>
              <p>
                {" "}
                share
                <BsFacebook
                  style={{ marginLeft: 14, marginRight: 14 }}
                  size={20}
                />{" "}
                <BsTwitter style={{ marginRight: 14 }} size={20} />
                <BsPinterest style={{ marginRight: 14 }} size={20} />
              </p>
            </div>
            <hr />
            <div className="product-security text-start">
              <ul style={{ listStyle: "none" }}>
                <li>
                  <img src={free} alt="delivery" />
                  <span>
                    Security Policy (Edit With Customer Reassurance Module)
                  </span>
                </li>
                <li>
                  <img src={back} alt="delivery" />
                  <span>
                    Delivery Policy (Edit With Customer Reassurance Module)
                  </span>
                </li>
                <li>
                  <img src={money} alt="delivery" />
                  <span>
                    Return Policy (Edit With Customer Reassurance Module)
                  </span>
                </li>
              </ul>
            </div>
            {/* tab modal  */}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SingleProductDetails;
