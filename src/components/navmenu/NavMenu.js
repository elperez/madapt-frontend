import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavMenu.css'

import iconAccess from '../../images/icons/access/access.png'
import iconFamilyPlanning from '../../images/icons/familyplanning/family-planning.png';
import iconPregnancy from '../../images/icons/pregnancynewborn/pregnancy-newborn.png';
import iconSexualHealth from '../../images/icons/sexualhealth/sexual-health.png';
import iconFamilyHealth from '../../images/icons/familyhealth/family-health.png';
import iconClinics from '../../images/icons/extraicons/findahealthservice.png';

class NavMenu extends Component {
  state = {
    menu: true,
  };

  showMenu() {
    this.setState({menu: !this.state.menu});
  };
  render() {
    return (
      <div>
        <button onClick={() => this.showMenu()} className="toggleMenu">{this.state.menu ? '-' : '+'}</button>

        <div className="menu">
          <Link to="/access">
            <div className="item item-1">
              <img className="icon" src={iconAccess} alt="Access"/>
              <div className="item-text"><p>{this.props.arabic ? "Access" : "تسجيل الدخول"}</p></div>
            </div>
          </Link>

          <Link to="/family-planning">
            <div className="item item-2">
              <img className="icon" src={iconFamilyPlanning} alt="Family Planning"/>
              <div className="item-text"><p>{this.props.arabic ? "Family Planning" : "نظيم الأسرة"}</p></div>
            </div>
          </Link>

          <Link to="/pregnancy-newborn">
            <div className="item item-3">
              <img className="icon" src={iconPregnancy} alt="Pregnancy and Newborn"/>
              <div className="item-text"><p>{this.props.arabic ? "Pregnancy Newborn" : "الحمل وحديثي الولادة"}</p></div>
            </div>
          </Link>

          <Link to="/sexual-health">
            <div className="item item-4">
              <img className="icon" src={iconSexualHealth} alt="Sexual Health"/>
              <div className="item-text"><p>{this.props.arabic ? "Sexual Health" : "الحياة الجنسية"}</p></div>
            </div>
          </Link>

          <Link to="/family-health">
            <div className="item item-5">
              <img className="icon" src={iconFamilyHealth} alt="Family and Social Health"/>
              <div className="item-text"><p>{this.props.arabic ? "Family Health" : "صحة المجتمع والعائلة"}</p></div>
            </div>
          </Link>

          <Link to="/clinics">
            <div className="item item-6">
              <img className="icon" src={iconClinics} alt="Clinics Location"/>
              <div className="item-text"><p>{this.props.arabic ? "Clinic Locations" : "Clinic arabic"}</p></div>
            </div>
          </Link>               
        </div>


        {this.state.menu && 
        <div className="mobile-menu">
          <Link to="/access">
            <div className="mobile-item item-1">
              <img className="icon" src={iconAccess} alt="Access"/>
              <div>{this.props.arabic ? "Access" : "تسجيل الدخول"}</div>
            </div>
          </Link>

          <Link to="/family-planning">
            <div className="mobile-item item-2">
              <img className="icon" src={iconFamilyPlanning} alt="Family Planning"/>
              <div>{this.props.arabic ? "Family Planning" : "نظيم الأسرة"}</div>
            </div>
          </Link>

          <Link to="/pregnancy-newborn">
            <div className="mobile-item item-3">
              <img className="icon" src={iconPregnancy} alt="Pregnancy and Newborn"/>
              <div>{this.props.arabic ? "Pregnancy Newborn" : "الحمل وحديثي الولادة"}</div>
            </div>
          </Link>

          <Link to="/sexual-health">
            <div className="mobile-item item-4">
              <img className="icon" src={iconSexualHealth} alt="Sexual Health"/>
              <div>{this.props.arabic ? "Sexual Health" : "الحياة الجنسية"}</div>
            </div>
          </Link>

          <Link to="/family-health">
            <div className="mobile-item item-5">
              <img className="icon" src={iconFamilyHealth} alt="Family and Social Health"/>
              <div>{this.props.arabic ? "Family Health" : "صحة المجتمع والعائلة"}</div>
            </div>
          </Link>

          <Link to="/clinics">
            <div className="mobile-item item-6">
              <img className="icon" src={iconClinics} alt="Clinics Location"/>
              <div>{this.props.arabic ? "Clinic Locations" : "Clinic arabic"}</div>
            </div>
          </Link>               
        </div>}
      </div>
    )
  }
}

export default NavMenu
