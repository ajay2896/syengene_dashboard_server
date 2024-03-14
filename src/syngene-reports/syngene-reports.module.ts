import { Module } from '@nestjs/common';
import { SyngeneReportsController } from './syngene-reports.controller';
import { SyngeneReportsService } from './syngene-reports.service';
import { DatabaseModule } from 'src/database/database.module';
import { UserReportEntryExitProviders } from './providers/syngene-user-report';

@Module({
  imports:[DatabaseModule],
  controllers: [SyngeneReportsController],
  providers: [
    SyngeneReportsService,
    ...UserReportEntryExitProviders
  ],
})
export class SyngeneReportsModule {}
