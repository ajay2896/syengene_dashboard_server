

import { userReportEntryExit } from '../entity/syngene-entery-exist-user-report.entity';
import { userReportPrimaryModule } from '../entity/syngene-gowning.entity';
import { userReportSub } from '../entity/syngene-sub.entity';

export const UserReportEntryExitProviders = [
  {
    provide: 'userReportEntryExit',
    useValue: userReportEntryExit
  },
  {
    provide: 'userReportPrimaryModule',
    useValue: userReportPrimaryModule
  },
  {
    provide: 'userReportSub',
    useValue: userReportSub
  }
  
]