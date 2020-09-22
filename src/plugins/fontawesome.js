import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBasket, faMoneyBillWave, faHandsHelping } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faShoppingBasket, faMoneyBillWave, faHandsHelping)
library.add(faFacebookF, faTwitter, faInstagram)

Vue.component('font-awesome-icon', FontAwesomeIcon)
