package com.app.service;

import com.app.model.Item;
import com.app.repository.ItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemServiceImpl implements ItemService{
    ItemRepository itemRepository;

    public ItemServiceImpl(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @Override
    public Item addItem(Item item) {
        return itemRepository.save(item);
    }

    @Override
    public Item findItemById(Long iid) {
        return itemRepository.findById(iid).get();
    }

    @Override
    public List<Item> showAllItems() {
        return itemRepository.findAll();
    }

    @Override
    public Item deleteItemById(Long iid) {
        Item item = itemRepository.findById(iid).get();
        itemRepository.deleteById(iid);
        return item;
    }

    @Override
    public Item updateItem(Long iid, Item newItem) {
        Item oldItem = itemRepository.findById(iid).get();
        oldItem.setName(newItem.getName());
        oldItem.setPrice(newItem.getPrice());
        oldItem.setQty(newItem.getQty());
        return itemRepository.save(oldItem);
    }
}
