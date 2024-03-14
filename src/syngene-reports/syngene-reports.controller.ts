import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SyngeneReportsService } from './syngene-reports.service';
import { EntryExitDTO } from './dtos/find-table';

@Controller('syngene-reports')
export class SyngeneReportsController {

    constructor(
        private readonly syngeneReportsService:SyngeneReportsService
    ) {}


    @Get('findAll')
    findAllData(@Query() query:EntryExitDTO) {

        return this.syngeneReportsService.findDataService(query);

    }

}
