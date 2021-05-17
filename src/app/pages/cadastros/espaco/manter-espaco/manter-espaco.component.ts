import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { first } from 'rxjs/operators';
import { EspacoModel } from 'src/app/models/espaco.model';
import { EspacoService } from 'src/app/services/domain/espaco.service';
import { ComparatorUtils } from 'src/app/shared/utils/comparator.utils';
import { ReactiveFormsUtils } from 'src/app/shared/utils/reactive-forms.utils';
import { ModalidadeEspacoModel } from '../../../../models/modalidade-espaco.model';
import { ModalidadeEspacoService } from '../../../../services/domain/modalidade-espaco.service';

@Component({
  selector: 'app-manter-espaco',
  templateUrl: './manter-espaco.component.html',
  styleUrls: ['./manter-espaco.component.css']
})
export class ManterEspacoComponent implements OnInit {

  espacoForm: FormGroup;
  espaco: EspacoModel;
  modalidades: ModalidadeEspacoModel[] = [];
  comparator = ComparatorUtils.getInstance();
  loading = false;
  avatarUrl?: string;
  formatterDollar = (value: number) => `R$ ${value}`;
  parserDollar = (value: string) => value.replace('R$ ', '');

  constructor(private fb: FormBuilder, 
              private espacoService: EspacoService, 
              private ModalidadeEspacoService: ModalidadeEspacoService,
              private router: Router, 
              private route: ActivatedRoute) {
    this.espaco = this.route.snapshot.data.entity || new EspacoModel();
  }

  ngOnInit() {
    this.ModalidadeEspacoService.getModalidadesEspaco()
      .pipe(first())
      .subscribe(value => this.modalidades = value);
    this.buildForm();
  }

  buildForm(): void {
    this.espacoForm = this.fb.group({
      id: [this.espaco.id, []],
      nome: [this.espaco.nome, [Validators.required]],
      descricao: [this.espaco.descricao, [Validators.required]],
      metrosQuadrados: [this.espaco.metrosQuadrados, [Validators.required]],
      quantidadePontos: [this.espaco.quantidadePontos, [Validators.required]],
      valorHora: [this.espaco.valorHora, [Validators.required]],
      nota: [this.espaco.nota, []],
      situacao: [this.espaco.situacao, [Validators.required]],
      modalidadeEspaco: [this.espaco.modalidadeEspaco, [Validators.required]],
      imagem: [[], []]
    });
  }

  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });
  };

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
    } else if (info.file.status === 'error') {
    }
  }

  salvar() {
    if (!ReactiveFormsUtils.eval(this.espacoForm)) {
      ReactiveFormsUtils.markForm(this.espacoForm);
      return;
    }
    if (this.espaco.id) {
      this.espacoService.updateEspaco(this.espaco.id, this.espacoForm.value)
        .subscribe(() => {
          this.router.navigate(['/espaco']);
        });      
    } else {
      this.espacoService.saveEspaco(this.espacoForm.value)
        .subscribe(() => {
          this.router.navigate(['/espaco']);
        });
    }
  }

  voltar(): void {
    history.go(-1);
  }
}
