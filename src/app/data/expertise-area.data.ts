import { ExpertiseAreaSchema } from "@data/schema/expertise-area.schema";
import { site, api, mobile, monitor, speed, search } from '@icon/regular.icon'


const expertiseAreaData: ExpertiseAreaSchema[] = [
  {
    icon: site,
    percent: '70%',
    name: 'Web Development'
  },
  {
    icon: api,
    percent: '80%',
    name: 'Backend Development'
  },
  {
    icon: mobile,
    percent: '5%',
    name: 'Mobile Development'
  },
  {
    icon: monitor,
    percent: '10%',
    name: 'UX/UI Design'
  },
  {
    icon: speed,
    percent: '75%',
    name: 'Performance Optimization'
  },
  {
    icon: search,
    percent: '20%',
    name: 'Unit Testing'
  },
]

export default expertiseAreaData
