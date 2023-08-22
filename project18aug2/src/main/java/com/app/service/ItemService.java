package com.app.service;

import com.app.model.Item;

import java.util.List;

public interface ItemService {
    Item addItem(Item item);
    Item findItemById(Long iid);
    List<Item> showAllItems();
    Item deleteItemById(Long iid);
    Item updateItem(Long iid, Item newItem);
}
