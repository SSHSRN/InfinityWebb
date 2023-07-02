using System;
using UnityEngine;

[Serializable]
public class EnemyData
{
    public float hitPoints;
}

public class EnemyHealth : MonoBehaviour
{
    [SerializeField] float hitPoints = 100f;

    public void TakeDamage(float damage)
    {
        hitPoints -= damage;
        if (hitPoints <= 0)
        {
            Destroy(gameObject);
        }
    }

    public EnemyData GetEnemyData()
    {
        return new EnemyData { hitPoints = hitPoints };
    }

    public void SetEnemyData(EnemyData enemyData)
    {
        hitPoints = enemyData.hitPoints;
    }
}
