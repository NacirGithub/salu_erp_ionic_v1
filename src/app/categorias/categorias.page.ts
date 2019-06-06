import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/services/domain/categoria.service';
import { CategoriaDTO } from 'src/models/categoria.dto';
import { API_CONFIG } from 'src/config/api.config';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  items: CategoriaDTO[];
  backetUrl: string = API_CONFIG.backetBaseUrl;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categoriaService.findAll()
    .subscribe(response => {
      this.items = response;
    },
    error => {});
  }

}
