import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { DetailsComponent } from './details.component';
import { RouterTestingModule } from "@angular/router/testing";
import { CocktailService } from "../../services/cocktail.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule } from "@angular/forms";

const mockCocktailService = {
  sendToServer: () => {}
}

class MockCocktailService {}
describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      providers: [{ provide: CocktailService, useValue: MockCocktailService }],
      imports: [FormsModule, RouterTestingModule], 
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

  describe('CocktailService', () => {

    beforeEach(() => TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [HttpClientTestingModule, RouterTestingModule], 
      providers: [CocktailService]
    }));

     it('should be created', () => {
      const service: CocktailService = TestBed.get(CocktailService);
      expect(service).toBeTruthy();
     });

     it('should have getAllDrinks function', () => {
      const service: CocktailService = TestBed.get(CocktailService);
      expect(service.getAllDrinks).toBeTruthy();
     });

  });

