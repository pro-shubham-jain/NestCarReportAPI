import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { AdminGuard } from 'src/gaurds/admin.gaurd';
import { AuthGuard } from 'src/gaurds/auth.gaurd';
import { seralize } from 'src/interceptor/seralize.interceptor';
import { Currentuser } from 'src/users/decorator/current-User.decorators';
import { ApproveReportDto } from './DTOs/approve-report.dto';
import { CreateReportDto } from './DTOs/create-report.dto';
import { GetEstimateDto } from './DTOs/get-estimate.dto';
import { ReportDto } from './DTOs/report.dto';
import { ReportsService } from './reports.service';

@Controller('reports')
@seralize(ReportDto)
export class ReportsController {

  constructor(private reportsService: ReportsService) { }

  @Get()
  getEstimate(@Query() query: GetEstimateDto) {
    return this.reportsService.createEstimate(query);
  }

  @Post()
  @UseGuards(AuthGuard)
  createReport(@Body() body: CreateReportDto, @Currentuser() user: any) {
    return this.reportsService.create(body, user);
  }

  @Patch('/:id')
  @UseGuards(AdminGuard)
  approveReport(@Param('id') id: string, @Body() body: ApproveReportDto) {
    return this.reportsService.changeApproval(parseInt(id), body.approved);
  }
}
