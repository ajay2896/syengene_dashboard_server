import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { SyngeneReportsService } from './syngene-reports.service';
import { EntryExitDTO } from './dtos/find-table';
import { AuthGuard } from '@nestjs/passport';

@Controller('syngene-reports')
@UseGuards(AuthGuard())
export class SyngeneReportsController {

    constructor(
        private readonly syngeneReportsService:SyngeneReportsService
    ) {}


    @Get('getEntryExitData')
    findAllData(@Query() query:EntryExitDTO) {

        return this.syngeneReportsService.findEntryExitDataService(query);

    }

    @Get('getGowningData')
    getGowningAllData(@Query() query:EntryExitDTO) {

        return this.syngeneReportsService.findGowningReportService(query);

    }

    @Get('getSubData')
    getSyngeneSubAllData(@Query() query:EntryExitDTO) {

        return this.syngeneReportsService.findSyngeneSubData(query);

    }

    @Post('createUser')
    craeteData(@Body() body) {

        return this.syngeneReportsService.createData(body);

    }

    @Get('countActiveUsers')
    getActiveUsers() {

        return this.syngeneReportsService.calculateActiveUsersService();

    }

}
