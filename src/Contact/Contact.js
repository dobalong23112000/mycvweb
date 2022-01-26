import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div id="contact">
      <div className="content-contact">
        <div className="left">
          <div className="title">MY CONTACT</div>
          <div className="address-items">
            <div className="item">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
              <div>Ha Noi, Viet Nam</div>
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faPhoneAlt} size="2x" />
              <div>0981231239123</div>
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
              <div>dobalong@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="content-right">
            <div className="title">Send me a message</div>
            <div className="description">
              If you have any work from me or any types of quries related to my
              tutorial, you can send me message from here. It's my pleasure to
              help you
            </div>
            <form>
              <div className="input">
                <input placeholder="NAME" type="text"></input>
              </div>
              <div className="input">
                <input placeholder="EMAIL" type="text"></input>
              </div>
              <div className="input">
                <input placeholder="MESSAGE" type="text"></input>
              </div>
              <button>SEND NOW</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
