import * as Asset from 'expo-asset';
import * as SQLite from "expo-sqlite";
import * as FileSystem from 'expo-file-system';

async function openDatabase(pathToDatabaseFile: string): Promise<SQLite.WebSQLDatabase> {
    if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'db')).exists) {
      await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'db');
    }
    await FileSystem.downloadAsync(
      Asset.Asset.fromModule(require(pathToDatabaseFile)).uri,
      FileSystem.documentDirectory + 'users.db'
    );
    return SQLite.openDatabase('users.db');
  }