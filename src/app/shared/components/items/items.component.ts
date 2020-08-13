import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {Model} from "../../models/model";


export abstract class ItemsComponent<T extends Model> {
    dataSource: MatTableDataSource<T> = null;
    selection = new SelectionModel<T>(true, []);
    working = false;
    search = false;

    total = 0;
    pageSize = 50;
    pageIndex = 0;
    filterValue = '';

    protected constructor() {

    }


    // ---------------------
    onSearch(value) {
        this.filterValue = value;
        this.get();
    }

    onSearchClose() {
        this.search = false;
        this.get();
    }

    onPageChange(pageEvent) {
        this.selection.clear();
        this.pageSize = pageEvent.pageSize;
        this.pageIndex = pageEvent.pageIndex;
        this.get();
    }

    isAllSelected() {
        return this.selection.selected.length === this.dataSource.data.length;
    }

    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    // ---------------------
    updateItem(item) {
        const i = this.dataSource.data.map(x => x.id).indexOf(item.id);
        if (i >= 0) {
            this.selection.clear();
            this.dataSource.data.splice(i, 1, item);
            this.dataSource.filter = '';
        }
    }

    update(result) {
        if (result === undefined) {
            return;
        }
        if (result instanceof Array) {
            result.forEach(this.updateItem);
        } else {
            this.updateItem(result);
        }
    }

    findById(id) {
        return this.dataSource.data.find(x => x.id === id);
    }

    set(data) {
        this.dataSource = new MatTableDataSource(data);
    }

    setTotal(total) {
        this.total = total;
    }

    add(result) {
        if (result instanceof Array) {
            this.dataSource.data.push(...result);
            this.total += result.length;
        } else {
            this.dataSource.data.push(result);
            this.total += 1;
        }
        this.dataSource.filter = '';
    }
    modify(result) {
        if (result instanceof Array) {
            this.dataSource.data.push(...result);
            this.total += result.length;
        } else {
            this.dataSource.data.push(result);
            this.total += 1;
        }
        this.dataSource.filter = '';
    }

    clear() {
        this.selection.clear();
        this.dataSource = new MatTableDataSource([]);
    }

    delete(result) {
        this.selection.clear();
        if (result instanceof Array) {
            this.dataSource.data = this.dataSource.data.filter((elem) => {
                return result.indexOf(elem.id) === -1;
            });
            this.total -= result.length;
        } else {
            this.dataSource.data = this.dataSource.data.filter((elem) => {
                return result.id !== elem.id;
            });
            this.total -= 1;
        }
    }

    abstract get();
}


