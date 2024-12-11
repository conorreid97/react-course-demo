import "../styles/Form.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import UpdateAccountAPI from "../components/UpdateAccountAPI";

const UpdateAccountPage = () => {
    return (
        <div className="form-center-container">
            <UpdateAccountAPI />
        </div>
            
    )
};

export default UpdateAccountPage;