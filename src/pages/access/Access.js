import React, { Component } from 'react';
import GridPageContainer from '../../components/grid-page-container/GridPageContainer'
import HealthSystemIcon from '../../images/icons/access/health-system-overview.png'
import AustralianNormIcon from '../../images/icons/access/australian-norms.png'
import MedicareCentrelinkIcon from '../../images/icons/access/medicare-centrelink.png'
import ResponsibilitiesIcon from '../../images/icons/access/responsibilities.png'
import DisabilityAccessIcon from '../../images/icons/access/disability-access.png'
import PrivatePublicIcon from '../../images/icons/access/private-public.png'

class Access extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [
        {
          imgSrc: HealthSystemIcon,
          theme: '1',
          titleText: {
            'en': 'Health System Overview',
            'ar': 'النظام الصحي'
          },
          linkUrl: '/access/health-system-overview'
        },
        {
          imgSrc: AustralianNormIcon,
          theme: '1',
          titleText: {
            'en': 'Australian norms',
            'ar': 'المعايير الاسترالية'
          },
          linkUrl: '/access/australian-norms'
        },
        {
          imgSrc: MedicareCentrelinkIcon,
          theme: '1',
          titleText: {
            'en': 'Medicare and Centrelink',
            'ar': 'مديكير وسنترلنك' 
          },
          linkUrl: '/access/medicare-centrelink'
        },
        {
          imgSrc: ResponsibilitiesIcon,
          theme: '1',
          titleText: {
            'en': 'Your Rights and Responsibilities',
            'ar': 'الحقوق والواجبات' 
          },
          linkUrl: '/access/rights-responsibilities'
        },
        {
          imgSrc: DisabilityAccessIcon,
          theme: '1',
          titleText: {
            'en': 'Disability Access',
            'ar': 'تسجيل الدخول لذوي الاحتياجات الخاصة' 
          },
          linkUrl: '/access/disability'
        },
        {
          imgSrc: PrivatePublicIcon,
          theme: '1',
          titleText: {
            'en': 'Private vs. Public Health Services',
            'ar': 'الخدمات الصحية العامة والخاصة' 
          },
          linkUrl: '/access/private-vs-public'
        }
      ]
    }
  }
  componentDidMount() {
    this.props.changeStyle(1);
  }
  render() {
    return (
      <GridPageContainer cards={this.state.cards}
                         lang={this.props.lang}/>
    )
  }
}

export default Access
