


// import { DataSource } from 'typeorm';
import { UserReport_EntryExit } from '../entity/syngene-entery-exist-user-report.entity';

export const UserReportEntryExitProviders = [
  {
    provide: 'UserReport_EntryExit',
    useValue: UserReport_EntryExit
  }
]