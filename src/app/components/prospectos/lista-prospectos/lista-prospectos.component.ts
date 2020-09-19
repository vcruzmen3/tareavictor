import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/**
import { ContextService } from '../../../../services/contextservice/context.service';
import { VidaCotizadorComponent } from '../vida-cotizador.component';

import { SubGrupoComponent } from 'src/app/components/cotizacion/vida-cotizador/subgrupos/subgrupo.component';
import { MatDialog } from '@angular/material/dialog';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
 */

@Component({
  selector: 'app-lista-prospectos',
  templateUrl: './lista-prospectos.component.html',
  styleUrls: ['./lista-prospectos.component.css']
})
export class ListaProspectosComponent implements OnInit {  
  nombre:string;
   
  
  
    public formQuotation: FormGroup = this.formBuilder.group({
      "Uuid": [],
      "UuidCustomer": [],
      "customerName": ['', Validators.required],
      "rfc": new FormControl('', [Validators.required, Validators.maxLength(13), Validators.pattern('^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$')]),
      "startDate": ['', Validators.required],
      "endDate": ['', Validators.required],
      "group": ['', Validators.required],
      "activity": ['', Validators.required],
      "giro": ['', Validators.required],
      "esquemafinanciamiento": ['', Validators.required],
      "montosiniestro": ['', Validators.required],
      "conquien": ['', Validators.required],
      "tipoadministracion": ['', Validators.required],
      "padecimientos": ['', Validators.required],
      "zona": ['', Validators.required],
      "desde": ['', Validators.required],
      "hasta": ['', Validators.required],
  
  
      
      "giroOther": [''],
      "zonaOther": [''],
      "padecimientosOther": [''],
      "tipoadministracionOther": [''],
      "conquienOther": [''],
  
  
      "isLayout":[''],
      "empleados":[''], 
      "paymentType": new FormControl('', [Validators.required]),
      "isLocktonCustomer": [],
      "personDiscapacity": ['3'],
      "isCompanyInssured": [0],
      "isDividendos": [0],
      "dividendosFomula": [''],
      "isAplicaPool": [0],
      "isDentroPool": [0],
      "isComplementos": [0],
  
  
      "isClaimReports": [0],
      "isSurplusPlaced": [0],
      "broker": [''],
      "insuranceCompany": [''],
      "insuranceCompanyOther": [''],
      "surplusPlaced": [''],
      "subRamo": [''],
      "subRamoOther": ['']
  
    });
  
    //Catalogs
    PaymentTypesList: any = [];
    GirosList: any = [];
    BrokersList: any = [];
    InsuranceList: any = [];
    SubRamoList: any[];
    ZonaList: any[];
    TipoAdministracionList: any[];
    ConquienList: any[];
    PadecimientosList: any[];
  
    isDividendosShow = false;
    isAplicaPoolShow = false;
    isDentroPoolShow= false;
    isComplementosShow= false;
    isCompanyInssuredShow=false;
    isAseguradoraShow = false;
    isFormulaShow = false;
    isClaimReportsShow = false;
    isSurplusPlacedShow= false;
  
    constructor(private router: Router,
     
      private formBuilder: FormBuilder,
      
    ) { }
  
    ngOnInit(): void {
      
     
  
    }
  
    
  
    setupDates() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      var todayStr = yyyy + '-' + mm + '-' + dd;
  
  
      today.setFullYear(today.getFullYear() + 1);
  
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      var aYearFromNowStr = yyyy + '-' + mm + '-' + dd;
  
      this.formQuotation.patchValue({
        startDate: todayStr,
        endDate: aYearFromNowStr
      });
  
    }
  
    isShowGiroOther = false;
    onChangeGiro(val: string) {
      if (this.formQuotation.value.giro == "OTRO") {
        const validators = [Validators.required, Validators.minLength(5)];
        this.formQuotation.controls['giroOther'].setValidators(validators);
        this.isShowGiroOther = true;
      } else {
        this.formQuotation.controls['giroOther'].setValidators(null);
        this.isShowGiroOther = false;
      }
      //this.formQuotation.updateValueAndValidity();
    }
  
  
    isShowZonaOther = false;
    onChangeZona(val: string) {
      if (this.formQuotation.value.giro == "OTRO") {
        const validators = [Validators.required, Validators.minLength(5)];
        this.formQuotation.controls['zonaOther'].setValidators(validators);
        this.isShowZonaOther = true;
      } else {
        this.formQuotation.controls['zonaOther'].setValidators(null);
        this.isShowZonaOther = false;
  
      }
  
      //this.formQuotation.updateValueAndValidity();
    }
  
    isShowPadecimientosOther = false;
    onChangePadecimientos(val: string) { 
      if (this.formQuotation.value.giro == "OTRO") {
        const validators = [Validators.required, Validators.minLength(5)];
        this.formQuotation.controls['padecimientosOther'].setValidators(validators);
        this.isShowPadecimientosOther = true;
      } else {
        this.formQuotation.controls['padecimientosOther'].setValidators(null);
        this.isShowPadecimientosOther = false;
      }
      //this.formQuotation.updateValueAndValidity();
    }
  
    
    isShowTipoadministracionOther=false;
    onChangeTipoadministracion(val: string) {
      if (this.formQuotation.value.giro == "OTRO") {
        const validators = [Validators.required, Validators.minLength(5)];
        this.formQuotation.controls['tipoadministracionOther'].setValidators(validators);
        this.isShowTipoadministracionOther = true;
      } else {
        this.formQuotation.controls['tipoadministracionOther'].setValidators(null);
        this.isShowTipoadministracionOther = false;
      }
  
      //this.formQuotation.updateValueAndValidity();
    }
  
  
    isShowConquienOther=false;
    onChangeConquien(val: string) {
   
      if (this.formQuotation.value.giro == "OTRO") {
  
        const validators = [Validators.required, Validators.minLength(5)];
        this.formQuotation.controls['conquienOther'].setValidators(validators);
        this.isShowConquienOther = true;
  
      } else {
  
        this.formQuotation.controls['conquienOther'].setValidators(null);
        this.isShowConquienOther = false;
  
      }
  
      //this.formQuotation.updateValueAndValidity();
    }
  
  
    
    onSubmit() {
      this.setupDates();
  
    }
  
    validateAllFormFields(formGroup: FormGroup) {         //{1}
      Object.keys(formGroup.controls).forEach(field => {  //{2}
        const control = formGroup.get(field);             //{3}
        if (control instanceof FormControl) {             //{4}
          control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {        //{5}
          this.validateAllFormFields(control);            //{6}
        }
      });
    }
  
    //NETWORK
  
    onCancel(){
      console.log("cancelando");
      this.router.navigate(['cotizacion']);
    }
    isShowSubRamoOther= false;
    onChangeSubRamo(val: string) {
      if (this.formQuotation.value.subRamo == "OTRO") {
        const validators = [Validators.required, Validators.minLength(5)];
        this.formQuotation.controls['subRamoOther'].setValidators(validators);
        this.isShowSubRamoOther = true;
      } else {
        this.formQuotation.controls['subRamoOther'].setValidators(null);
        this.isShowSubRamoOther = false;
      }
  
      //this.formQuotation.updateValueAndValidity();
    }  
  }