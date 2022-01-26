import React from "react";
import {} from "../assets/css/employees.css";
import Spin from "react-reveal/Spin";
import { FaLinkedin } from "react-icons/fa";
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsFolderSymlink } from "react-icons/bs";

export default function Employees() {
  return (
    <div>
      <section className="container">
        <div className="row">
          <div className="col-md-12">
            <Spin>
              <h2 className=" text-center my-2 mb-4">Colaboradores</h2>{" "}
            </Spin>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-3">
            <div
              className="shadow
            d-flex
            justify-content-center
            align-items-center p-3 rounded-lg
            flex-column"
            >
              <div className="person-img">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQFDEGrT6YnfZQ/profile-displayphoto-shrink_200_200/0/1636844143563?e=1648684800&v=beta&t=TWWHhMFi6LWZEqAOn9KJqQrHNF0p21qrEnm1e3Rzg38"
                  alt="img 1"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="person-name my-2">
                <h3 className="">Rodrigo Caro</h3>
              </div>
              <div className="info">
                <h5>Backend developer</h5>
              </div>
              <div className="social-icons my-2">
                <a
                  href="https://www.linkedin.com/in/rodrigocaroprogramador"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin font-size="25px" />
                </a>
                <a
                  href="https://github.com/CaroRodrigo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub font-size="25px" />
                </a>
                <a
                  href="https://youtube.com/channel/UCaGlI68vFfQBpB_wvYfv_mw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineYoutube font-size="25px" />
                </a>
                <a
                  href="http://rodrigocaroprogramador.tk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFolderSymlink font-size="25px" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-3">
            <div
              className="shadow
            d-flex
            justify-content-center
            align-items-center p-3 rounded-lg
            flex-column
            "
            >
              <div className="person-img">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D35AQFgr4B8dTO1Aw/profile-framedphoto-shrink_200_200/0/1616809508368?e=1643212800&v=beta&t=K3NeDXzzNEZOq94Mf1XoByyj2tkq7htMiaRkvm-OUT4"
                  alt="img 1"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="person-name my-2">
                <h3 className="">Carolina Perez</h3>
              </div>
              <div className="info">
                <h5>Analista en Sistemas</h5>
              </div>
              <div className="social-icons my-2">
                <a
                  href="https://www.linkedin.com/in/carolinainesperez11"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FaLinkedin font-size="25px" />
                </a>
                <a
                  href="https://github.com/carop2580"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub font-size="25px" />
                </a>
                <a href="https://github.com/carop2580">
                  <AiOutlineMail font-size="25px" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-3">
            <div
              className="shadow
            d-flex
            justify-content-center
            align-items-center p-3 rounded-lg
            flex-column
            "
            >
              <div className="person-img">
                <img
                  src="https://avatars.githubusercontent.com/u/77360580?v=4"
                  alt="img 1"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="person-name my-2">
                <h3 className="">Walter Franz</h3>
              </div>
              <div className="info">
                <h5>Frontend developer</h5>
              </div>
              <div className="social-icons my-2">
                <a
                  href="https://www.linkedin.com/in/walter-franz-08712aa9/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FaLinkedin font-size="25px" />
                </a>
                <a
                  href="https://github.com/walter-wf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub font-size="25px" />
                </a>
                <a href="https://github.com/carop2580">
                  <AiOutlineMail font-size="25px" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-3">
            <div
              className="shadow
            d-flex
            justify-content-center
            align-items-center p-3 rounded-lg
            flex-column
            "
            >
              <div className="person-img">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQGfC6uX6-B5uQ/profile-displayphoto-shrink_200_200/0/1629827221747?e=1648684800&v=beta&t=6O4GEMvkmoY9A8XK7bhi225WzefHkZFmrBjjc92eE98"
                  alt="img 1"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="person-name my-2">
                <h3 className="">Alejo Piñeiro</h3>
              </div>
              <div className="info">
                <h5>Frontend developer</h5>
              </div>
              <div className="social-icons my-2">
                <a
                  href="https://www.linkedin.com/in/alejo-pi%C3%B1eiro-68b440209/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FaLinkedin font-size="25px" />
                </a>
                <a
                  href="https://github.com/AleP1/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub font-size="25px" />
                </a>
                <a
                  href="mailto:alejo.k26@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineMail font-size="25px" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-3">
            <div
              className="shadow
            d-flex
            justify-content-center
            align-items-center p-3 rounded-lg
            flex-column
            "
            >
              <div className="person-img">
                <img
                  src="https://media-exp1.licdn.com/dms/image/sync/C4E27AQEzKYLX6YnufQ/articleshare-shrink_480/0/1642975443263?e=1643158800&v=beta&t=tSh7Fk0-j_ThXSbkR4yaWrOdk6dGdUkmR7qgY1MVN-o"
                  alt="img 1"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="person-name my-2">
                <h3 className="">Horacio Brunaccio</h3>
              </div>
              <div className="info">
                <h5>Frontend developer</h5>
              </div>
              <div className="social-icons my-2">
                <a
                  href="https://www.linkedin.com/in/horacio-damian-brunaccio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FaLinkedin font-size="25px" />
                </a>
                <a
                  href="https://github.com/Horuuuu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub font-size="25px" />
                </a>
                <a href="mailto:h2.globo@gmail.com">
                  <AiOutlineMail font-size="25px" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
