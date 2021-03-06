import {NavLink} from "react-router-dom";
import React from "react";
import {Col, Collection, CollectionItem} from "react-materialize";
import store from '../../../../store/globalstore';
import {updateSettingsChoice} from "../../../../actions/global/global";

/**
 * Manages which application settings we will be modifying
 * @constructor Creates ApplicationSettingsHeader
 */
const ApplicationSettingsHeader = () => (


    <Collection>
        <CollectionItem href={null}><h6 onClick={(e) => {
            store.dispatch(updateSettingsChoice("liquid-dl"))
        }}>Liquid-dl</h6></CollectionItem>
        <CollectionItem href={null}><h6 onClick={(e) => {
            store.dispatch(updateSettingsChoice("youtube-dl"))
        }}> Youtube-dl</h6></CollectionItem>
        <CollectionItem href={null}><h6 onClick={(e) => {
            store.dispatch(updateSettingsChoice("cloudcmd"))
        }}>Cloud Commander</h6></CollectionItem>
    </Collection>


);
export default ApplicationSettingsHeader